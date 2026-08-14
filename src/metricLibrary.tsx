import React from 'react';
import { InlineMath } from 'react-katex';
import katex from "katex";
export interface MetricDefinitionRich {
    title: React.ReactNode;
    content: React.ReactNode;
}

export const METRIC_RICH_CONTENT: Record<string, MetricDefinitionRich> = {
    dice: {
        title: (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <span>Dice Similarity Coefficient (F1-Score)</span>

                <button
                    type="button"
                    onClick={() => window.open(
                        'https://metrics-reloaded.dkfz.de/metric-library/dsc',
                        '_blank',
                        'noopener,noreferrer'
                    )}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0.55rem',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        background: '#3b437c',
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
                        transition: 'all 0.15s ease',
                    }}
                    title="Learn more about precision and recall"
                >
                    <span>Metrics Reloaded</span>
                    <span style={{ fontSize: '0.75rem' }}>↗</span>
                </button>
            </div>
        ),
        content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p>
                    In image segmentation, the Dice Similarity Coefficient <InlineMath math="DSC" /> (also called the Dice-Sørensen coefficient) measures the overlap between the prediction mask <InlineMath math="\hat{Y}" /> and the ground truth <InlineMath math="Y" />.
                </p>

                <div dangerouslySetInnerHTML={{
                    __html: katex.renderToString(
                        String.raw`DSC(X,Y) = \frac{2 |Y \cap \hat{Y}|}{|Y| + |\hat{Y}|}`,
                        {
                            throwOnError: false,
                            strict: "ignore",
                            displayMode: true,
                        }
                    )
                }} />
                <p>
                    In binary segmentation, <InlineMath math="DSC" /> is equal to the <InlineMath math="F_1" />-score. More generally, <InlineMath math="F_1" /> is defined as the harmonic mean between precision and recall:
                </p>
                <div dangerouslySetInnerHTML={{
                    __html: katex.renderToString(
                        String.raw`F_1 = 2*\frac{\text{precision}* \text{recall}}{\text{precision}+\text{recall}}`,
                        {
                            throwOnError: false,
                            strict: "ignore",
                            displayMode: true,
                        }
                    )
                }} />
                <p>
                    Dice has proven itself a popular loss function in segmentation problems, meaning that models learn to minimize <InlineMath math="1- DSC(X,Y)" />.
                </p>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <h4>Confusion Matrix Formula</h4>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3em' }}>
                        <div dangerouslySetInnerHTML={{
                            __html: katex.renderToString(
                                String.raw`DSC = \frac{2*TP}{2*TP + FP + FN}`,
                                {
                                    throwOnError: false,
                                    strict: "ignore",
                                    displayMode: true,
                                }
                            )
                        }} />
                        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Numerator */}
                            <div
                                style={{
                                    width: '30px',
                                    height: '40px',
                                    background: '#22c55e',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.8rem',
                                    borderRadius: '4px'
                                }}
                            >2x</div>

                            {/* Fraction bar */}
                            <div style={{ width: '100%', height: '2px', background: '#334155', margin: '4px 0' }} />

                            {/* Denominator */}
                            <div style={{ display: 'flex' }}>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#22c55e',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        borderTopLeftRadius: '4px',
                                        borderBottomLeftRadius: '4px'
                                    }}
                                >2x</div>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#ef4444'
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#3b82f6',
                                        borderTopRightRadius: '4px',
                                        borderBottomRightRadius: '4px'
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://en.wikipedia.org/wiki/Dice-S%C3%B8rensen_coefficient" target="_blank">https://en.wikipedia.org/wiki/Dice-Sørensen_coefficient</a>
                <a href="https://en.wikipedia.org/wiki/F-score" target="_blank">https://en.wikipedia.org/wiki/F-score</a>
            </div>
        )
    },
    ce: {
        title: (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <span>(Binary) Cross-Entropy/NLL</span>

                <button
                    type="button"
                    onClick={() => window.open(
                        'https://metrics-reloaded.dkfz.de/metric-library/negative_log_likelihood',
                        '_blank',
                        'noopener,noreferrer'
                    )}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0.55rem',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        background: '#3b437c',
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
                        transition: 'all 0.15s ease',
                    }}
                    title="Learn more about precision and recall"
                >
                    <span>Metrics Reloaded</span>
                    <span style={{ fontSize: '0.75rem' }}>↗</span>
                </button>
            </div>
        ),
        content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p>
                    Binary Cross-Entropy <InlineMath math="BCE" /> (also called negative log likelihood) is a calibration metric, meaning the smaller the value, the better the segmentation. This is why it is a popular choice as a component in loss functions.
                    <br></br>
                    It operates on the predicted probabilities of a pixel belonging to one of the two classes. This is averaged over all <InlineMath math="N" /> pixels:
                </p>

                <div dangerouslySetInnerHTML={{
                    __html: katex.renderToString(
                        String.raw`BCE(Y,\hat{Y}) = -\frac{1}{N}\sum_{n=1}^{N}[y_n \log(\hat{y}_n)+(1-y_n)\log(1-\hat{y}_n)]`,
                        {
                            throwOnError: false,
                            strict: "ignore",
                            displayMode: true,
                        }
                    )
                }} />
                <p>
                    This is another reason why this metric is used as a loss function: segmentation models output their calculated probability that a given pixel is foreground/background during training. It is only afterwards that we threshold it in order to get concrete yes/no value for every pixel.
                </p>
                <p>
                    In the canvas, we are only dealing with binary foreground/background predictions, which is why this can be equated to the training of a model that is perfectly confident in every classification it makes, which is seldom the case in reality.
                </p>
            </div>
        )
    },
    iou: {
        title: (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <span>Intersection over Union (Jaccard Index)</span>

                <button
                    type="button"
                    onClick={() => window.open(
                        'https://metrics-reloaded.dkfz.de/metric-library/box_approx_iou',
                        '_blank',
                        'noopener,noreferrer'
                    )}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0.55rem',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        background: '#3b437c',
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
                        transition: 'all 0.15s ease',
                    }}
                    title="Learn more about precision and recall"
                >
                    <span>Metrics Reloaded</span>
                    <span style={{ fontSize: '0.75rem' }}>↗</span>
                </button>
            </div>
        ),
        content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p>
                    The IoU is the one of the standard metrics for object detection and semantic segmentation problems. It calculates the ratio of the intersection area to the union area of the two masks. Given a ground-truth mask <InlineMath math="Y" /> and a prediction mask <InlineMath math="\hat{Y}" />.
                </p>

                <div dangerouslySetInnerHTML={{
                    __html: katex.renderToString(
                        String.raw`IoU(Y, \hat{Y}) = \frac{\text{Area of Overlap}}{\text{Area of Union}} = \frac{|Y \cap \hat{Y}|}{|Y \cup \hat{Y}|}`,
                        {
                            throwOnError: false,
                            strict: "ignore",
                            displayMode: true,
                        }
                    )
                }} />

                <p>
                    This is an intuitive and ubiquitous way of quantifying segmentation quality in many disciplines. Either IoU or DSC are often de-facto required when reporting the quality of of a segmentation.
                </p>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <h4>Confusion Matrix Formula</h4>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3em' }}>
                        <div dangerouslySetInnerHTML={{
                            __html: katex.renderToString(
                                String.raw`IoU = \frac{TP}{TP + FP + FN}`,
                                {
                                    throwOnError: false,
                                    strict: "ignore",
                                    displayMode: true,
                                }
                            )
                        }} />
                        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Numerator */}
                            <div
                                style={{
                                    width: '30px',
                                    height: '40px',
                                    background: '#22c55e',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.8rem',
                                    borderRadius: '4px'
                                }}
                            ></div>

                            {/* Fraction bar */}
                            <div style={{ width: '100%', height: '2px', background: '#334155', margin: '4px 0' }} />

                            {/* Denominator */}
                            <div style={{ display: 'flex' }}>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#22c55e',
                                        borderTopLeftRadius: '4px',
                                        borderBottomLeftRadius: '4px'
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#ef4444'
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#3b82f6',
                                        borderTopRightRadius: '4px',
                                        borderBottomRightRadius: '4px'
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://en.wikipedia.org/wiki/Jaccard_index#Jaccard_index_in_binary_classification_confusion_matrices" target="_blank">https://en.wikipedia.org/wiki/Jaccard_index</a>
            </div>
        )
    },
    recall: {
        title: (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <span>Recall/TPR/Sensitivity</span>

                <button
                    type="button"
                    onClick={() => window.open(
                        'https://metrics-reloaded.dkfz.de/metric-library/sensitivity',
                        '_blank',
                        'noopener,noreferrer'
                    )}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0.55rem',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        background: '#3b437c',
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
                        transition: 'all 0.15s ease',
                    }}
                    title="Learn more about precision and recall"
                >
                    <span>Metrics Reloaded</span>
                    <span style={{ fontSize: '0.75rem' }}>↗</span>
                </button>
            </div>
        ),
        content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p>
                    Recall goes by many names and is also known as true positive rate (TPR) and Sensitivity. It quantifies the fraction of true positives among all true samples. This means that a model that outputs only foreground will have a recall of 1. Therefore, recall can not be used on its own for accurate reporting.
                </p>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <h4>Confusion Matrix Formula</h4>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3em' }}>
                        <div dangerouslySetInnerHTML={{
                            __html: katex.renderToString(
                                String.raw`\text{Recall} = \frac{TP}{TP + FN}`,
                                {
                                    throwOnError: false,
                                    strict: "ignore",
                                    displayMode: true,
                                }
                            )
                        }} />
                        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Numerator */}
                            <div
                                style={{
                                    width: '30px',
                                    height: '40px',
                                    background: '#22c55e',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.8rem',
                                    borderRadius: '4px'
                                }}
                            ></div>

                            {/* Fraction bar */}
                            <div style={{ width: '100%', height: '2px', background: '#334155', margin: '4px 0' }} />

                            {/* Denominator */}
                            <div style={{ display: 'flex' }}>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#22c55e',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        borderTopLeftRadius: '4px',
                                        borderBottomLeftRadius: '4px'
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#3a81f5',
                                        borderTopRightRadius: '4px',
                                        borderBottomRightRadius: '4px'
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://en.wikipedia.org/wiki/Precision_and_recall" target="_blank">https://en.wikipedia.org/wiki/Precision_and_recall</a>
            </div>
        )
    },
    precision: {
        title: (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <span>Precision/PPV</span>

                <button
                    type="button"
                    onClick={() => window.open(
                        'https://metrics-reloaded.dkfz.de/metric-library/PPV',
                        '_blank',
                        'noopener,noreferrer'
                    )}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0.55rem',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        background: '#3b437c',
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
                        transition: 'all 0.15s ease',
                    }}
                    title="Learn more about precision and recall"
                >
                    <span>Metrics Reloaded</span>
                    <span style={{ fontSize: '0.75rem' }}>↗</span>
                </button>
            </div>
        ),
        content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p>
                    Precision is also known as positive predictive value. It quantifies the fraction of true positives among all predicted samples.
                </p>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <h4>Confusion Matrix Formula</h4>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3em' }}>
                        <div dangerouslySetInnerHTML={{
                            __html: katex.renderToString(
                                String.raw`\text{Precision} = \frac{TP}{TP + FP}`,
                                {
                                    throwOnError: false,
                                    strict: "ignore",
                                    displayMode: true,
                                }
                            )
                        }} />
                        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Numerator */}
                            <div
                                style={{
                                    width: '30px',
                                    height: '40px',
                                    background: '#22c55e',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.8rem',
                                    borderRadius: '4px'
                                }}
                            ></div>

                            {/* Fraction bar */}
                            <div style={{ width: '100%', height: '2px', background: '#334155', margin: '4px 0' }} />

                            {/* Denominator */}
                            <div style={{ display: 'flex' }}>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#22c55e',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        borderTopLeftRadius: '4px',
                                        borderBottomLeftRadius: '4px'
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#ef4444',
                                        borderTopRightRadius: '4px',
                                        borderBottomRightRadius: '4px'
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://en.wikipedia.org/wiki/Precision_and_recall" target="_blank">https://en.wikipedia.org/wiki/Precision_and_recall</a>
            </div>
        )
    },
    accuracy: {
        title: "Accuracy",
        content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p>
                    Accuracy might sound like the "best" metric, but it is almost never used due to its systemic problems especially in segmentation.
                </p>
                <p>
                    Accuracy measures what percentage of the image the model "gets right" which includes background pixels being predicted correctly.
                    Since many segmentation tasks (especially in the medical domain) have an overwhelming share of background compared to foreground, accuracy might be very high if the prediction contains nothing.
                </p>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <h4>Confusion Matrix Formula</h4>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3em' }}>
                        <div dangerouslySetInnerHTML={{
                            __html: katex.renderToString(
                                String.raw`\text{Accuracy} = \frac{TP + TN}{P + N}`,
                                {
                                    throwOnError: false,
                                    strict: "ignore",
                                    displayMode: true,
                                }
                            )
                        }} />
                        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Numerator */}

                            <div style={{ display: 'flex' }}>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#22c55e',
                                        borderTopLeftRadius: '4px',
                                        borderBottomLeftRadius: '4px'
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#ef4444',
                                        borderTopRightRadius: '4px',
                                        borderBottomRightRadius: '4px'
                                    }}
                                ></div>
                            </div>

                            {/* Fraction bar */}
                            <div style={{ width: '100%', height: '2px', background: '#334155', margin: '4px 0' }} />

                            {/* Denominator */}
                            <div style={{ display: 'flex' }}>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#22c55e',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        borderTopLeftRadius: '4px',
                                        borderBottomLeftRadius: '4px'
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#3b82f6'
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#f1f5f9'
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '30px',
                                        height: '40px',
                                        background: '#ef4444',
                                        borderTopRightRadius: '4px',
                                        borderBottomRightRadius: '4px'
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://en.wikipedia.org/wiki/Confusion_matrix" target="_blank">https://en.wikipedia.org/wiki/Confusion_matrix</a>
            </div>
        )
    },
};